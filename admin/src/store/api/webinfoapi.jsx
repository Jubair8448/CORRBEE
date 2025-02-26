import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const webinfoApi = createApi({
  reducerPath: 'webinfoApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.REACT_APP_API_URL
  }),
  endpoints: (builder) => ({
    getWebinfo: builder.query({
      query: () => ({
        url: 'websiteinfo',
        method: 'GET'
      })
    }),
    countinfo: builder.query({
      query: () => ({
        url: 'countinfo',
        method: 'GET'
      })
    }),
    contactlist: builder.query({
      query: () => ({
        url: 'contactus',
        method: 'GET'
      })
    }),
    contactlistlatest: builder.query({
      query: () => ({
        url: 'contactus10',
        method: 'GET'
      })
    }),
    contactsingle: builder.query({
      query: (id) => ({
        url: `contactus/${id}`,
        method: 'GET'
      })
    }),
    patchWebinfo: builder.mutation({
      query: ({ data }) => ({
        url: `websiteinfo`,
        method: 'PATCH',
        body: data
      })
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `contactus/${id}`,  // ✅ Fixed the delete API endpoint
        method: 'DELETE'
      })
    }),
  }),
})

export const { 
  useGetWebinfoQuery, 
  usePatchWebinfoMutation, 
  useCountinfoQuery, 
  useContactlistQuery, 
  useDeleteContactMutation, 
  useContactsingleQuery, 
  useContactlistlatestQuery 
} = webinfoApi;
