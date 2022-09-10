module.exports = [
    {
        message: ' HOC名は？',
        name: 'name',
        type: 'input',
        validate: answer => {
            if (answer !== '') {
                return true;
            }
        }
    },
    {
        message: 'hocフォルダー配下に新しくエントリーポイントを作成しますか？',
        name: 'isInject',
        type: 'toggle',
        enabled: 'Yes',
        disabled: 'No',
    },
];
