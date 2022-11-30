const core = require('@actions/core');
const { context, GitHub } = require('@actions/github');

async function run() {
    try {
        //Get input
        const tag = process.env.TAG || process.env.INPUT_TAG || '';
        console.log(`Searching for tag: ${tag}`);

        // Get owner and repo from context of payload that triggered the action
        const { owner, repo } = context.repo

        const github = new GitHub(process.env.GITHUB_TOKEN || core.getInput('github_token'));
        var exists = 'false';

        try {
            const getRefResponse = await github.git.getRef({
                owner,
                repo,
                ref: `tags/${tag}`
            });

            if (getRefResponse.status === 200) {
                console.log("Tag was found");
                exists = 'true';
            }

        } catch(error) {
            console.log("Tag was not found");
        }

        core.setOutput('exists', exists);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();