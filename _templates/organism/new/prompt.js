module.exports = [
    {
        message: 'organisms名は？',
        name: 'name',
        type: 'input',
        validate: answer => {
            if (answer !== '') {
                return true;
            }
        },
    },
    {
        message: 'organismsフォルダー配下に新しくエントリーポイントを作成しますか？',
        name: 'isInject',
        type: 'toggle',
        enabled: 'Yes',
        disabled: 'No',
    },
];
