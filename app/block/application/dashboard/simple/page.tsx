'use client'

import ChartAreaInteractive from './chart-area'
import DataTable from './data-table'

import data from './data.json'
import Stats from './stats'

export default function Dashboard() {
    return (
        <div className='flex flex-1 flex-col'>
            <div className='flex flex-1 flex-col gap-2'>
                <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
                    <Stats />
                    <div className='px-4 lg:px-6'>
                        <ChartAreaInteractive />
                    </div>
                    <div className='px-4 lg:px-6'>
                        <DataTable data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}
