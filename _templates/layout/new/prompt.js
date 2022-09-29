module.exports = [
  {
    message: " layout名は?　(※名前はキャメルケースで記載) ex) UserPageLayout",
    name: "name",
    type: "input",
  },
  {
    message: "layoutsフォルダー配下に新しくエントリーポイントを作成しますか？",
    name: "isInject",
    type: "toggle",
    enabled: "Yes",
    disabled: "No",
  },
];
