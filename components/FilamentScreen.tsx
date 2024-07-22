import {
  FilamentScene,
  FilamentView,
  DefaultLight,
  Model,
  Camera,
} from "react-native-filament";
import HiphopGirl from "@/assets/models/hiphopgirl.glb";

export function FilamentScreen() {
  return (
    <FilamentScene>
      {/* 🏞️ A view to draw the 3D content to */}
      <FilamentView style={{ flex: 1 }}>
        {/* 💡 A light source, otherwise the scene will be black */}
        <DefaultLight />

        {/* 📦 A 3D model */}
        <Model
          transformToUnitCube
          // URL setup
          //   source={{
          //     uri: "https://github.com/margelo/react-native-filament/raw/main/package/example/Shared/assets/hiphopgirl.glb",
          //   }}
          //   source={{
          //     uri: "hiphopgirl.glb",
          //   }}
          source={HiphopGirl}
          rotate={[3, 2, 5]}
        />

        {/* 📹 A camera through which the scene is observed and projected onto the view */}
        <Camera cameraPosition={[0, 0, 5]} cameraTarget={[0, 0, 0]} />
      </FilamentView>
    </FilamentScene>
  );
}
