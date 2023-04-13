import { Flex, ListItem, UnorderedList } from "@chakra-ui/react"

export const About = () => {

    return(
        <Flex direction="column">
            <Flex>
                Hola!! 👋
                Soy un estudiante de ingeniería de sistemas de 9° semestre, destacado por mi promedio académico en La Escuela Colombiana de Ingeniería Julio Garavito, con habilidades en programación y solución de problemas por medio de algoritmos y estrategias de desarrollo de software.
            </Flex>
            <Flex ml="20px">
                <UnorderedList>
                    <ListItem>🔭Estoy interesado en el desarrollo de software.</ListItem>
                    <li>🌱 Estoy aprendiendo sobre seguridad informatica y arquitectura de software.</li>
                    <li>📫 Como comunicarse conmigo: egonzalezsuarez07@gmail.com</li>
                    <li>⚡ Fun fact: Al principio pense en muchas carreras distintas, hasta teologia, pero cuando empece a estudiar ingieneria descubri mi pasion por programar.</li>
                    <li>👾 Hobbies: Me gustan mucho los videosjuegos y la mecanica automotriz.</li>
                    <li>🤍 Presentacion: En este repositorio pueden encontrar diferentes proyectos hechos por mi y mi hoja de vida. https://github.com/EnriqueGS07/Presentacion.git</li>
                </UnorderedList>
            </Flex>
        </Flex>
    )
}