'use client'

import { ChartArea } from './chart-area'
import data from './data.json'
import DataTable from './data-table'
import Stats from './stats'

export default function Dashboard() {
    return (
        <div className='flex flex-1 flex-col'>
            <div className='flex flex-1 flex-col gap-2'>
                <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
                    <Stats />
                    <div className='px-4 lg:px-6'>
                        <ChartArea />
                    </div>
                    <div className='px-4 lg:px-6'>
                        <DataTable data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}
