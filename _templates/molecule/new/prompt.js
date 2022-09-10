module.exports = [
    {
        message: 'Molecule(モルキュール)名は？',
        name: 'name',
        type: 'input',
        validate: answer => {
            if (answer !== '') {
                return true;
            }
        },
    },
    {
        message: 'moleculesフォルダー配下に新しくエントリーポイントを作成しますか？',
        name: 'isInject',
        type: 'toggle',
        enabled: 'Yes',
        disabled: 'No',
    },
];
