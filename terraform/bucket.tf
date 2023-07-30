# Create an S3 bucket for storing static web content
resource "aws_s3_bucket" "static-content-bucket" {
  bucket = "percolation-static-content-${var.account_id}"
}


resource "aws_s3_bucket_website_configuration" "percolation-website-configuration" {
  bucket = aws_s3_bucket.static-content-bucket.id

  index_document {
    suffix = "index.html"
  }
}

# Expose bucket for public reads: https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteAccessPermissionsReqd.html
resource "aws_s3_bucket_public_access_block" "example" {
  bucket = aws_s3_bucket.static-content-bucket.id

  block_public_acls       = false
  block_public_policy     = false
}

data "aws_iam_policy_document" "allow_public_read_access" {
  statement {
    principals {
      identifiers = ["*"]
      type        = "AWS"
    }
    effect = "Allow"

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "arn:aws:s3:::${aws_s3_bucket.static-content-bucket.bucket}/*",
    ]
  }
}

resource "aws_s3_bucket_policy" "allow_access_from_another_account" {
  bucket = aws_s3_bucket.static-content-bucket.id
  policy = data.aws_iam_policy_document.allow_public_read_access.json
}
