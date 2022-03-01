---
name: Firebase
ring: assess
quadrant: platforms
isNew: TRUE
---

Firebase is a platform that allows you to accelerate app development with fully managed backend infrastructure, allowing developers to quickly and securely deploy applications

Comparing firebase to similar platforms (serverless framework) the deployment times seem to be significantly longer - a couple of minutes rather than a few seconds.  For small applications this is not necessarily an issue but it may lead to large cycle times when developing at scale.

Additionally firebase doesnt seem to provide CLI / IAC for all its functionality (e.g firebase auth) This raises questions about the repeatability for creating / modifying infrastructure when compared to products like serverless framework, CDK and Terraform.
