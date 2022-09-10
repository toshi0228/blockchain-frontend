module.exports = [
    {
        message: 'helper名は (ex timer, storage)？',
        name: 'name',
        type: 'input',
    },
    {
        message: 'helpersフォルダー配下に新しくエントリーポイントを作成しますか？',
        name: 'isInject',
        type: 'toggle',
        enabled: 'Yes',
        disabled: 'No',
    },
];