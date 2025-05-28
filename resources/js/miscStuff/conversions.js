//script for any conversions needed
function bytesToMB(bytes) {
  const megabytes = bytes / (1024 * 1024);
  return megabytes;
}
window.bytesToMB = bytesToMB