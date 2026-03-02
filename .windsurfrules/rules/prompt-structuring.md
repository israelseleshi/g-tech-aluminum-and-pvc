# Prompt Structuring Rules

These rules ensure all user prompts are optimized for efficiency and clarity before processing.

1. Before responding to any user prompt, always rewrite it internally into this structured format to reduce ambiguity and token usage:
   - **Goal**: The main objective or task.
   - **Existing Code/Context**: Relevant files, functions, or current state (use @mentions if applicable).
   - **Constraints**: Any limitations, such as specific libraries, standards, or technologies to use/avoid.
   - **Edge Cases**: Potential unusual scenarios or errors to handle.
   - **Preferences**: Desired style, output format, or additional notes.

2. If the original prompt lacks details in any section, infer reasonable defaults based on the project Memories or indexed codebase, but confirm with the user if critical info is missing.

3. Apply this rewriting silently unless the user asks to see the restructured prompt.