module.exports = [
  {
    message: "uiParts名は ex) Text ※キャメルケース？",
    name: "name",
    type: "input",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
    },
  },
  {
    message: "uiPartsフォルダー配下に新しくエントリーポイントを作成しますか？",
    name: "isInject",
    type: "toggle",
    enabled: "Yes",
    disabled: "No",
  },
];
