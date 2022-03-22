import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import dayjs from "dayjs";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.covid19api.com'
    }),
    reducerPath: 'api',
    endpoints: builder => ({
        countries: builder.query({
            query: () => ({
                url: '/countries'
            })
        }),
        getStats: builder.query({
            query: (countryName) => ({
                url: `/country/${countryName}/status/confirmed?from=${
                    dayjs().subtract(30, 'day').format('YYYY-MM-DD')
                }T00:00:00Z&to=${dayjs().format('YYYY-MM-DD')}T00:00:00Z`
            })
        })
    })
})

export const {
    useCountriesQuery,
    useLazyGetStatsQuery
} = api;