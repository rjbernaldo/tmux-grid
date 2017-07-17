# `tmux-grid` 
[![Build Status](https://circleci.com/gh/rjbernaldo:tmux-grid.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/rjbernaldo:tmux-grid.svg?style=shield&circle-token=:circle-token)

Setup and manage tmux panes using config files

## Installation

```
$ npm install -g tmux-grid
```

## Usage

1. Define panes inside a config file named `.tmux-grid`
2. Run `tmux-grid` within the same directory

## Configuration

- WIP

## Examples

- Regular window

  `$ tmux-grid -c examples/sample1.yml`

  ```
  name: sample1
  command: something
  ```

- Vertical split

  `$ tmux-grid -c examples/sample2.yml`

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
      panes:
        - type: pane-h
          command: something3
        - type: pane-h
          command: something4
  ```

- Vertical split with size

  `$ tmux-grid -c examples/sample3.yml`

  ```
  name: sample3
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
