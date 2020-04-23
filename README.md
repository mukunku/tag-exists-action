# tag-exists-action
A Github action that determines if a tag exists

## Inputs

### `tag`

**Required** The tag to search for.

## Outputs

### `exists`

a string value of 'true' or 'false'

## Example usage

```js
uses: actions/tag-exists@v1.0.0
id: checkTag
with:
  tag: 'v1'

run: echo ${{ steps.checkTag.outputs.exists }}
```