import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = [
    { name: 'Ankara' },
    { name: 'İstanbul' },
    { name: 'İzmir' },
    { name: 'Bursa' },
    { name: 'Antalya' },
    { name: 'Konya' },
]

export default function Search() {
    const [selected, setSelected] = useState(people[0])
    
    return (



        <div className="flex justify-center mb-10">
            <div className="flex w-full border border-indigo-600 mr-5 items-center rounded-full py-3 px-6 bg-white shadow-xl  font-light leading-tight w-2/5 ">

                <input className="ml-3 w-full focus:outline-none focus:shadow-outline" type="text" name="Search" id="" placeholder="Search" />
                <SearchIcon className="h-8 w-8 " />

            </div>
            <div>
                <div className="w-72 z-10">
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative">
                            <Listbox.Button className="relative w-full border border-indigo-600 py-5 pl-5 pr-15 text-left bg-white rounded-full shadow-xl cursor-default font-light leading-tight  focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                <span className="block truncate">{selected.name}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon
                                        className="w-5 h-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                                    {people.map((person, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                            }
                                            value={person}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span
                                                        className={`${selected ? 'font-medium' : 'font-normal'
                                                            } block truncate`}
                                                    >
                                                        {person.name}
                                                    </span>
                                                    {selected ? (
                                                        <span
                                                            className={`${active ? 'text-amber-600' : 'text-amber-600'
                                                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                                        >
                                                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                </div>
            </div>
        </div>

    )
}
