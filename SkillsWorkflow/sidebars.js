module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Craft',
            items: [
                {
                    Panels: [
                        {
                            Grid: [
                                'craft/panels/grid/set-columns'
                            ]
                        },
                        {
                            Form: [
                                'craft/panels/form/set-items'
                            ]
                        }
                    ],
                },
                'craft/craft-workspaces'
            ]
        },
        {
            type: 'category',
            label: 'Advanced',
            items: [
                {
                    Automations: [
                        {
                            type: 'autogenerated',
                            dirName: 'automations'
                        }
                    ]
                },
                {
                    SDK: [
                        {
                            Document: [
                                'sdk/document',
                                'sdk/assignment',
                                'sdk/client',
                                'sdk/currentUser',
                                'sdk/customTable',
                                'sdk/estimate',
                                'sdk/holiday',
                                'sdk/user'
                            ]
                        },
                        'sdk/execute-api',
                        {
                            Shell: [
                                'sdk/shell-workspace',
                                'sdk/shell-panel'
                            ]
                        },
                        {
                            UI: [
                                'sdk/ui',
                                'sdk/ui-grid',
                                'sdk/ui-selectBox',
                                'sdk/ui-buttons',
                                'sdk/ui-alert',
                                'sdk/ui-tooltip',
                                'sdk/ui-workspaces'
                            ]
                        },
                        {
                            Utils: [
                                'sdk/utils',
                                'sdk/utils-datetime',
                                'sdk/utils-export'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: 'category',
            label: 'Integrations',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'integrations'
                }
            ]
        },
        {
            type: 'category',
            label: 'University',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'university'
                }
            ]
        }
    ]
};
