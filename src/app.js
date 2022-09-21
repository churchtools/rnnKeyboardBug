import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Input } from './login/Input';
import { Start } from './login/Start';

const screenList = {
    Input,
    Start
};

function registerScreens() {
    const registerScreen = (name, Screen) => {
        Navigation.registerComponent('screen.' + name, () => {
            // eslint-disable-next-line react/prop-types
            return function NavigationComponentCreator({ componentId, ...props }) {
                return <Screen {...props} componentId={componentId} />;
            };
        });
    };

    Object.keys(screenList).forEach(screenName => registerScreen(screenName, screenList[screenName]));
}
registerScreens();

export default class App extends Component {
    constructor(props) {
        super(props);

        Navigation.events().registerAppLaunchedListener(() => {
            Navigation.setDefaultOptions({
                topBar: {
                    visible: true,
                    backButton: {
                        visible: false
                    },
                    background: { color: '#F1F5F9' },
                    elevation: 0,
                    noBorder: true,
                    scrollEdgeAppearance: {
                        active: true,
                        noBorder: true
                    }
                },
                statusBar: {
                    style: 'dark',
                    backgroundColor: '#F1F5F9',
                    visible: true // Android specific
                },
                layout: {
                    orientation: ['portrait']
                },
                navigationBar: {
                    backgroundColor: '#ffffff'
                },
                bottomTab: {
                    popToRoot: true
                }
            });

            Navigation.setRoot({
                root: {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'screen.Start'
                                }
                            }
                        ]
                    }
                }
            });
        });
    }
}
