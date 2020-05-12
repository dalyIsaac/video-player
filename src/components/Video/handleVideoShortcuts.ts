export interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  onKeyDown: () => void;
}

function keyboardMatch(
  e: React.KeyboardEvent,
  shortcut: KeyboardShortcut
): boolean {
  return (
    e.key === shortcut.key &&
    (!shortcut.ctrlKey || e.ctrlKey === shortcut.ctrlKey)
  );
}

export function handleKeyboardShortcuts(
  e: React.KeyboardEvent,
  shortcuts: KeyboardShortcut[]
) {
  e.preventDefault();
  for (const shortcut of shortcuts) {
    if (keyboardMatch(e, shortcut)) {
      shortcut.onKeyDown();
      return;
    }
  }
}

export interface WheelShortcuts {
  x: (val: number) => void;
  y: (val: number) => void;
}

export function handleWheelShortcuts(
  e: React.WheelEvent,
  shortcuts: WheelShortcuts
) {
  if (e.deltaX) {
    shortcuts.x(e.deltaX);
  }

  if (e.deltaY) {
    shortcuts.y(e.deltaY);
  }
}
