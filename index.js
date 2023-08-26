const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        //Get input
        const tag = process.env.TAG || process.env.INPUT_TAG || '';
        const repoInput = core.getInput('repoInput')

        console.log(`Searching for tag: ${tag} in ${repoInput}`);

        // Get owner and repo from context of payload that triggered the action
        const [ owner, ...repository ] = repoInput.split('/')
        const repo = repository.join('/')
        
        const octokit = github.getOctokit(process.env.GITHUB_TOKEN || core.getInput('github_token'));
        var exists = 'false';

        try {
            const getRefResponse = await octokit.rest.git.getRef({
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