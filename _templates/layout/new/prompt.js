module.exports = [
    {
        message: ' layout名は?　(※名前はキャメルケースで記載) ex) UserPageLayout',
        name: 'name',
        type: 'input',
        validate: answer => {
            if (answer !== '') {
                return true;
            }
        }
    },
    {
        message: 'layoutsフォルダー配下に新しくエントリーポイントを作成しますか？',
        name: 'isInject',
        type: 'toggle',
        enabled: 'Yes',
        disabled: 'No',
    },
];
