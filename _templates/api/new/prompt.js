module.exports = [
    {
        message: 'apis名は ex) account？',
        name: 'name',
        type: 'input',
    },
    {
        message: 'apisフォルダー配下に新しくエントリーポイントを作成しますか？',
        name: 'isInject',
        type: 'toggle',
        enabled: 'Yes',
        disabled: 'No',
    },
    {
        message: 'interfacesフォルダー配下に新しくエントリーポイントを作成しますか？',
        name: 'isInjectInterfaces',
        type: 'toggle',
        enabled: 'Yes',
        disabled: 'No',
    },
];