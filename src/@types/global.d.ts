type RegistrationFormType = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    countryCode: string;
    password: string;
    password_confirmation: string;
};

type SelectItemType = {
    label: string;
    value: string;
};


type loginFormType = {
    phoneNumber: string;
    password: string;
};

type FormSectionWrapperType = {
    id: number;
    title: string;
    description?: string;
    bottomDescription?: string;
    fields: FormBuilderFieldType[];
};

type FormBuilderFieldType = {
    id: number;
    type: string;
    name: string;
    value?: string | null | boolean;
    checked?: boolean;
    label?: string;
    disabled?: boolean;
    maxLength?: number;
    placeholder?: string;
    customType?: 'twoInputInRow' | 'twoField2/5';
    itemsArray?: SelectItemType[];
};