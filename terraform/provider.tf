provider "aws" {
  default_tags {
    tags = {
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
  assume_role {
    role_arn = "arn:aws:iam::${var.account_id}:role/TerraformAdministratorAccess"
  }
  region = var.region
}
