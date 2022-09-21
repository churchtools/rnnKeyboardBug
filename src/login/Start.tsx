import React, { FunctionComponent, useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

export type LoginWelcomeProps = { componentId: string };

export function Start({ componentId }: LoginWelcomeProps) {
    const goToInsertUrl = useCallback(() => {
        const component = {
            name: 'screen.Input',
            passProps: {},
            options: {}
        };

        Navigation.push(componentId, {
            component
        });
    }, [componentId]);

    return (
        <View
            style={{
                height: '100%',
                backgroundColor: '#7DD3FC',
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center'
            }}
        >
            <Pressable onPress={goToInsertUrl}>
                <Text>Go to input</Text>
            </Pressable>
        </View>
    );
}
