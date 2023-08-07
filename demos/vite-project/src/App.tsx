import { Suspense, useMemo } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { getAuthRouters } from 'react-router-auth-plus'
import { ConfigProvider, Spin } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { useGlobalStore } from '@/stores'
import routers from './router'

const App = () => {
  const { primaryColor } = useGlobalStore()
  const auth = ['home']
  const _routers = useMemo(() => {
    const result = getAuthRouters({
      routers,
      noAuthElement: (router) => <h1>no auth</h1>,
      render: (element) => element,
      auth: auth || [],
    })

    return result
  }, [auth])
  return (
    <>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: primaryColor,
          },
        }}
      >
        <Suspense fallback={<Spin />}>
          <RouterProvider router={createBrowserRouter(_routers)} />
        </Suspense>
      </ConfigProvider>
    </>
  )
}

export default App
