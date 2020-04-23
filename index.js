const core = require('@actions/core');
const { context, GitHub } = require('@actions/github');

async function run() {
    try {
        const tag = process.env.TAG || process.env.INPUT_TAG || '';

        const github = new GitHub(process.env.GITHUB_TOKEN);

        var exists = false;

        try {
            const getRefResponse = await github.git.getRef({
                owner: context.owner,
                repo: context.repo,
                ref: `tags/${tag}`
            });

            const payload = JSON.stringify(getRefResponse);
            console.log(`getRef payload: ${payload}`);

            if (getRefResponse && getRefResponse.ref)
                exists = true;

        } catch(error) {
            core.warning(`getRefResponse failed with error: ${error}`);
        }

        core.setOutput('exists', exists);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();