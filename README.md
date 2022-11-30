# tag-exists-action
A GitHub action that determines if a tag exists in your repo.

## Inputs

### `tag`

**Required** The tag to search for.

## Outputs

### `exists`

a string value of 'true' or 'false'

## Example usage

```yaml
- uses: mukunku/tag-exists-action@v1.2.0
  id: checkTag
  with: 
    tag: 'tag-to-search-for'

- run: echo ${{ steps.checkTag.outputs.exists }}
```

This action uses the `${{github.token}}` secret to automatically inject your access token. If you'd like to provide your own token instead check out [this help article](https://github.com/mukunku/tag-exists-action/wiki/Setting-the-GITHUB_TOKEN-explicitly).
