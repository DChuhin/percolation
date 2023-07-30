variable "region" {
  type = string
  description = "AWS Region. E.g.: us-east-1, us-east-2, etc."
}
variable "environment" {
  type = string
  description = "Stage environment, e.g. dev, qa, staging, prod"
}
variable "account_id" {
  type = number
  description = "AWS Account Id"
}
