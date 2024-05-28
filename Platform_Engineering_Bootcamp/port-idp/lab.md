# Port

Port is a SaaS product, with on-premise, open-source brokers. While we had considered requests for an on-premise Port in the past, we ended up choosing SaaS since it allows us to deliver features quickly and provide the best product. We also believe SaaS doesn’t mean compromised security, but rather the opposite.

We put a lot of thought into Port’s design to make it secure. As a result, Port’s product doesn’t store secrets or credentials, and doesn't require whitelisting of IPs. Port can not make any inbound network calls into our customers’ networks. All communication between the broker and Port is one-way, initiated from the broker, and encrypted with TLS.


## Configuration

1. Sign up for a free Port account: https://www.getport.io/try-now

You'll see an orange button for a free account.

2. Click on the Self-Service button on the top of the page.

3. Click the blue **+New Action** button.

4. Give you action a new name and select the "Create" action type.

5. Click "Next" to the backend type and choose "Run GitHub Workflow"

6. Under the Backend tab, add in your GitHub org, repo, and GitHub Action file name. If you don't have a GitHub Action Workflow to use, you can use the one in the Section1 directory.

For the "Workflow Filename", it should be the full path. For example, if you have a GitHub Action that's named `main.yaml`, the fully qualified path would be `.github/workflows/main.yml`

See said example here: 

Save it to your Github repo under the `.github/workflows` directory. If one doesn't already exist, create it.

7. While still under the Backend tab, scroll down to the advanced settings and toggle the "Omit payload" button to "Yes".

8. Click next.

9. Click the blue Create button.

10. You should now see your Workflow on the Self-Service page. You can deploy it from there.