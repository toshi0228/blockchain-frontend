module.exports = [
  {
    message: "apis名は ex) account, transactionPool？ ※キャメルケース",
    name: "name",
    type: "input",
  },
  {
    message: "apisフォルダー配下に新しくエントリーポイントを作成しますか？",
    name: "isInject",
    type: "toggle",
    enabled: "Yes",
    disabled: "No",
  },
];
