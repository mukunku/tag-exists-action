# tag-exists-action
A Github action that determines if a tag exists

## Inputs

### `tag`

**Required** The tag to search for.

### `github_token`

GitHub token. default: `${{github.token}}`

## Outputs

### `exists`

a string value of 'true' or 'false'

## Example usage

```yaml
- uses: mukunku/tag-exists-action@v1.1.0
  id: checkTag
  with: 
    tag: 'v1'

- run: echo ${{ steps.checkTag.outputs.exists }}
```
