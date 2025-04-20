import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Layout.jsx'
import { Home } from './pages/Home'
import { Quizzes } from './pages/Quizzes'
import { Resources } from './pages/Resources'
import { FirstAidKit } from './pages/FirstAidKit'
import { Profile } from './pages/Profile'
import { QuizList } from './pages/QuizList'
import { PerceivedStress } from './pages/QuizPerceivedStress'
import { MentalHealth } from './pages/QuizMentalHealth'
import { PhysicalHealth } from './pages/QuizPhysicalHealth'
import { EmotionalHealth } from './pages/QuizEmotionalWellbeing'
import './index.css'
import 'vite/modulepreload-polyfill'
import { 
    createHashRouter,
    Router,
    RouterProvider,
 } from 'react-router-dom'

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/quizzes",
                element: <Quizzes />,
                children: [
                    {
                        path: "/quizzes",
                        element: <QuizList />,
                    },
                    {
                        path: "/quizzes/perceived-stress",
                        element: <PerceivedStress />,
                    },
                    {
                        path: "/quizzes/emotional-well-being",
                        element: <EmotionalHealth />,
                    },
                    {
                        path: "/quizzes/mental-health",
                        element: <MentalHealth />,
                    },
                    {
                        path: "/quizzes/physical-health",
                        element: <PhysicalHealth />,
                    },
                ]
            },
            {
                path: "/resources",
                element: <Resources/>,
            },
            {
                path: "/first-aid-kit",
                element: <FirstAidKit />,
            },
            {
                path: "/profile/:id",
                element: <Profile />,
            },

        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
