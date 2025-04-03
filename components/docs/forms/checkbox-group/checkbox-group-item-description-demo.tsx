import { Checkbox, CheckboxGroup } from '@/components/ui'

export default function CheckboxGroupItemDescriptionDemo() {
    return (
        <CheckboxGroup label='Email Settings'>
            <Checkbox value='newsletter' description='Receive our newsletter once per week'>
                Newsletter
            </Checkbox>
            <Checkbox value='deals' description='The best deals and sales for members'>
                Deals
            </Checkbox>
            <Checkbox value='notifications' description='Notifications about your orders'>
                Notifications
            </Checkbox>
        </CheckboxGroup>
    )
}
