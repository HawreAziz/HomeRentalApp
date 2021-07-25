import { NavigationProp, RouteProp } from '@react-navigation/native';

export interface HouseProps {
    id: string;
    title: string;
    location: string;
    image: any;
    details: string;
    interiors: any[];
}

export type NavigationParamList = {
    Home: undefined;
    OnBoard: undefined;
    Detail: { house: HouseProps };
}


export type ScreenProps<T extends keyof NavigationParamList> = {
    navigation: NavigationProp<NavigationParamList, T>;
    route: RouteProp<NavigationParamList, T>;
}