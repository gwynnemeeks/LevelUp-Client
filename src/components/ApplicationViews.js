import React from "react"
import { Route } from "react-router-dom"
import { GameForm } from "./game/GameForm"
import { GameList } from "./game/GameList"
import { GameProvider } from "./game/GameProvider"
import { EventProvider } from "./game/EventProvider"
import { EventList } from "./game/EventList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <GameProvider>
                <Route exact path="/games">
                    <GameList />
                    <Route exact path="/games/new" render={props => <GameForm {...props} />} />
                </Route>
            </GameProvider>
            <EventProvider>
                <Route exact path="/events">
                    <EventList />
                </Route>
            </EventProvider>
        </main>
    </>
}
