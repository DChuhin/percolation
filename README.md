<h1>Deployment</h1>

<h3>Setup AWS</h3>
* Setup `TerraformAdministratorAccess` role in your AWS Account with admin access (or least privileges if you prefer)
* Install and configure AWS CLI. AWS CLI must be available to do `sts:AssumeRole` for `TerraformAdministratorAccess`. For that corresponding user must be included in `TerraformAdministratorAccess` role's trust policy

<h3>Run Terraform</h3>
* go to `terraform` directory
* Replace `account_id` variable value to your AWS account id in `terraform.tfvars` file
* `terraform init`
* `terraform apply`

<h3>Deploy static content</h3>
* After successful build and provisioning infrastructure in terraform deploy files to bucket:
* `aws s3 ls` to verify bucket was created. Grab bucket name
* go to `build` directory
* `aws s3 sync . s3://{your bucket name}`
* check http://{your bucket name}.s3-website.us-east-1.amazonaws.com
