resource "aws_s3_bucket" "www" {
  bucket        = "www.${var.domain_name}"
  force_destroy = true
}
resource "aws_s3_bucket" "root" {
  bucket        = var.domain_name
  force_destroy = true
}
locals {
  bucket_ids = {
    www = aws_s3_bucket.www.id
    root = aws_s3_bucket.root.id
  }

bucket_policies = {
    www = templatefile("${path.module}/files/s3-policy.json", { bucket = "www.${var.domain_name}", account_id =  data.aws_caller_identity.current.account_id, cloudfront_id = aws_cloudfront_distribution.website.id})
    root = templatefile("${path.module}/files/s3-policy.json", { bucket = "${var.domain_name}", account_id =  data.aws_caller_identity.current.account_id, cloudfront_id = aws_cloudfront_distribution.website.id})
  }
}
resource "aws_s3_bucket_ownership_controls" "website" {
  for_each = local.bucket_ids
  bucket = each.value
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}
resource "aws_s3_bucket_public_access_block" "website" {
  for_each = local.bucket_ids
  bucket = each.value

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false

  depends_on = [aws_s3_bucket_policy.website[0],aws_s3_bucket_policy.website[1]]
}

data "aws_caller_identity" "current" {}




resource "aws_s3_bucket_policy" "website" {
  for_each = local.bucket_ids
  bucket   = each.value

  policy        = local.bucket_policies[each.key]
  depends_on = [aws_s3_bucket_acl.website[0],aws_s3_bucket_acl.website[1]]
}
resource "aws_s3_bucket_acl" "website" {
  for_each = local.bucket_ids
  bucket   = each.value
  acl      = "public-read"
  depends_on = [aws_s3_bucket.root,aws_s3_bucket.www]
}

resource "aws_s3_bucket_cors_configuration" "website" {
  bucket = aws_s3_bucket.www.id
  cors_rule {
    allowed_headers = ["Authorization", "Content-Length"]
    allowed_methods = ["GET", "POST"]
    allowed_origins = ["*","https://www.${var.domain_name}"]
    expose_headers  = ["ETag"]
    max_age_seconds = 3000
  }
}

resource "aws_s3_bucket_website_configuration" "www" {
  bucket = aws_s3_bucket.www.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_website_configuration" "root" {
  bucket = aws_s3_bucket.root.id
  redirect_all_requests_to {
    host_name = "https://www.${var.domain_name}"
  }
}
module "template_files" {
  source = "hashicorp/dir/template"

  base_dir = "${var.nextjs_export_directory}"

}

resource "aws_s3_object" "website_files" {
  for_each = module.template_files.files
  bucket   = aws_s3_bucket.www.id
  key      = each.key
  content_type = each.value.content_type
  source   = each.value.source_path
  content = each.value.content
  etag     = each.value.digests.md5
}
