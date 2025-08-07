import { GameFiles } from "../../types"
import { ScriptIntegrationResult } from "../../types"

export class ScriptIntegrationAgent {
  async integrateResources(
    files: GameFiles,
    imageResources: string[],
    audioResources: string[]
  ): Promise<ScriptIntegrationResult> {
 
    let finalFiles = { ...files }
    
    
    return {
      files: finalFiles,
      imageResources,
      audioResources
    }
  }
  
}