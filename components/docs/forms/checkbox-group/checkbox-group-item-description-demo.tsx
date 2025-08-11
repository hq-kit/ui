import { Checkbox, CheckboxGroup } from '@/components/ui'

export default function CheckboxGroupItemDescriptionDemo() {
    return (
        <CheckboxGroup label='Email Settings'>
            <Checkbox description='Receive our newsletter once per week' value='newsletter'>
                Newsletter
            </Checkbox>
            <Checkbox description='The best deals and sales for members' value='deals'>
                Deals
            </Checkbox>
            <Checkbox description='Notifications about your orders' value='notifications'>
                Notifications
            </Checkbox>
        </CheckboxGroup>
    )
}
