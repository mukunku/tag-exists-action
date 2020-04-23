# tag-exists-action
A Github action that determines if a tag exists

## Inputs

### `tag`

**Required** The tag to search for.

## Outputs

### `exists`

true or false

## Example usage

uses: actions/tag-exists@v1
with:
  tag: 'v1'