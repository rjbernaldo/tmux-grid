# `tmux-grid`

Setup and manage tmux panes using config files

## Installation

```
npm install -g tmux-grid
```

## Usage

1. Define panes inside a configuration file named `.tmux-grid`
2. Run `tmux-grid` within the same directory

## Configuration

- WIP

## Examples

- Regular window
  ```
  name: sample3
  command: something
  ```

- Vertical split
```
name: sample
panes:
  - type: pane-v
    panes:
      - type: pane-h
        command: something1
      - type: pane-h
        command: something2
  - type: pane-v
    panes:
      - type: pane-h
        command: something3
      - type: pane-h
        command: something4
```

- Vertical split with size
```
name: sample2
panes:
  - type: pane-v
    panes:
      - type: pane-h
        command: something1
      - type: pane-h
        command: something2
  - type: pane-v
    size: 25
    command: log something
```

## License

[MIT License](https://github.com/rjbernaldo/tmux-grid/blob/master/LICENSE) © Rj Bernaldo