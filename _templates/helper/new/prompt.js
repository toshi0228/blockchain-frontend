module.exports = [
  {
    message: "helper名は (ex timer, storage) *キャメルケース？",
    name: "name",
    type: "input",
  },
  {
    message: "helperフォルダー配下に新しくエントリーポイントを作成しますか？",
    name: "isInject",
    type: "toggle",
    enabled: "Yes",
    disabled: "No",
  },
];
