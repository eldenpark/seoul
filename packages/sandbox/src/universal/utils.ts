export function alert(label: string | number) {
  if (window && window.alert) {
    window.alert(label); // eslint-disable-line
  }
}
