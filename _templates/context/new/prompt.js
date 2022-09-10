module.exports = [
    {
        message: 'contexts名は (ex Account, Profile, ThemeColor)？',
        name: 'name',
        type: 'input',
    },
    {
        message: 'contextsフォルダー配下に新しくエントリーポイントを作成しますか？',
        name: 'isInject',
        type: 'toggle',
        enabled: 'Yes',
        disabled: 'No',
    },
];