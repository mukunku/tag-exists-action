# tag-exists-action
A GitHub action that determines if a tag exists in a repo.

## Inputs

### `tag` 

**Required** - The tag to search for.

### `repo`

**Optional** - Repo you'd like to search, in `owner/repo-name` format.

## Outputs

### `exists`

A string value of 'true' or 'false'

## Example usages

To check if the tag `v1.0` exists in your repo:
```yaml
- uses: mukunku/tag-exists-action@v1.5.0
  id: check-tag
  with: 
    tag: 'v1.0'

- run: echo ${{ steps.check-tag.outputs.exists }}
```

To check if the tag [`v1.0.0`](https://github.com/actions/checkout/releases/tag/v1.0.0) exists in the repo `actions/checkout`:
```yaml
- uses: mukunku/tag-exists-action@v1.5.0
  id: check-tag
  with: 
    tag: 'v1.0.0'
    repo: 'actions/checkout'

- run: echo ${{ steps.check-tag.outputs.exists }}
```

<hr>

This action uses the `${{github.token}}` secret to automatically inject your access token. If you'd like to provide your own token instead check out [this help article](https://github.com/mukunku/tag-exists-action/wiki/Setting-the-GITHUB_TOKEN-explicitly).
