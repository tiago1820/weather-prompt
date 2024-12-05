PS1='\[\e[1;36m\]\342\224\214\342\224\200\[\e[1;36m\][\[\e[1;33m\]\u\[\e[1;31m\]@\[\e[1;35m\]\h\[\e[1;36m\]]\[\e[1;36m\]\342\224\200\[\e[1;36m\][\[\e[1;32m\]\w\[\e[1;36m\]]\[\e[1;36m\]\342\224\200[\[\e[1;34m\]\A\[\e[1;36m\]]\[\e[1;36m\]\342\224\200[\[\e[1;33m\]$(cat ~/.temp_value)\[\e[1;36m\]]\n\[\e[1;36m\]\342\224\224\342\224\200╼ \[\e[1;33m\]\$ \[\e[0m\]'

crontab
*/5 * * * * node ~/Projects/weather-ts/build/index.js


## Project Structure

The project follows a specific structure to organize its files and directories.

```plaintext
src                                 # Root directory of the source code
├── constants                       # 
│   └── index.constant.ts           #
├── controllers                     # Controllers to handle business logic
│   └── weather.controller.ts       # Controller for weather
├── services                        # Contains business logic and database interactions
│   └── weather.services.ts         # Handles operations related to weather
├── app.ts                          # Configuration and initialization of the application
└── index.ts                        # Entry point of the application
```