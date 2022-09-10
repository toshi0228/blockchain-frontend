module.exports = [
    {
        message: 'Atom(アトム)名は？',
        name: 'name',
        type: 'input',
        validate: answer => {
            if (answer !== '') {
                return true;
            }
        }
    },
    {
        message: 'プロパティ名は？',
        name: 'property',
        type: 'input',
        validate: answer => {
            if (answer !== '') {
                return true;
            }
        }
    },
    {
        message: 'atomsフォルダー配下に新しくエントリーポイントを作成しますか？',
        name: 'isInject',
        type: 'toggle',
        enabled: 'Yes',
        disabled: 'No',
    },
];
