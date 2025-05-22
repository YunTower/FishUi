# 头像 Avatar

用于展示用户或事物的头像，支持图片、文字、图标等多种形式。

## 基础用法

最常用的头像展示方式。

<demo src="./demo/avatar/basic.vue"></demo>

## 不同形状

通过 `shape` 属性设置头像的形状，支持圆形和方形。

<demo src="./demo/avatar/shape.vue"></demo>

## 不同尺寸

通过 `size` 属性设置头像的尺寸，支持预设和自定义数值。

<demo src="./demo/avatar/size.vue"></demo>

## 自定义背景色

通过 `style` 属性设置头像的背景色。

<demo src="./demo/avatar/background.vue"></demo>

## 文字内容自适应

头像组件会根据内容自动调整文字大小，确保文字能够合适地显示在头像中。可以通过 `autoFixFontSize` 属性控制是否启用此功能。下面的示例展示了不同长度文本的自适应效果，点击按钮可以动态切换文本内容。

<demo src="./demo/avatar/text-auto-size.vue"></demo>

## 可点击头像

通过 `triggerType` 属性设置触发器的类型，支持遮罩层和按钮两种方式。

<demo src="./demo/avatar/trigger.vue"></demo>

## 头像组

使用 `f-avatar-group` 组件展示多个头像，可以设置最大显示数量，头像之间会有重叠效果。头像组通过负的左外边距（`margin-left`）实现头像之间的重叠，并可以通过 `zIndexAscend` 属性控制层级顺序。

<demo src="./demo/avatar/group.vue"></demo>

## 高级头像组

头像组支持多种配置，包括形状、间距、额外头像样式等。头像组会根据尺寸自动调整重叠的距离，小尺寸头像重叠少一些，大尺寸头像重叠多一些，保持视觉协调性。

<demo src="./demo/avatar/group-advanced.vue"></demo>

## 头像组中的文字自适应

头像组中的每个头像也支持文字内容自适应，可以通过 `autoFixFontSize` 属性统一控制。

<demo src="./demo/avatar/group-text-auto-size.vue"></demo>

## API

### Avatar Props

| 属性名              | 说明         | 类型                                                       | 默认值      |
|------------------|------------|----------------------------------------------------------|----------|
| shape            | 头像形状       | `circle` \| `square`                                     | `circle` |
| size             | 头像尺寸       | number \| `mini` \| `small` \| `medium` \| `large`       | `medium` |
| imageUrl         | 图片地址       | string                                                   | -        |
| autoFixFontSize  | 是否自动调整文字大小 | boolean                                                  | true     |
| triggerType      | 触发器类型      | `mask` \| `button`                                       | `mask`   |
| triggerIconStyle | 触发器图标样式    | Record<string, any>                                      | {}       |
| objectFit        | 图片填充模式     | `fill` \| `contain` \| `cover` \| `none` \| `scale-down` | `cover`  |

### Avatar Events

| 事件名   | 说明      | 参数                  |
|-------|---------|---------------------|
| click | 点击头像时触发 | (event: MouseEvent) |

### Avatar Slots

| 插槽名     | 说明       |
|---------|----------|
| default | 自定义头像内容  |
| trigger | 自定义触发器图标 |

### AvatarGroup Props

| 属性名              | 说明                         | 类型                                                 | 默认值      |
|------------------|----------------------------|----------------------------------------------------|----------|
| shape            | 头像形状                       | `circle` \| `square`                               | `circle` |
| size             | 头像尺寸                       | number \| `mini` \| `small` \| `medium` \| `large` | 40       |
| maxCount         | 最大显示数量，超出显示 +N             | number                                             | 0 (不限制)  |
| zIndexAscend     | 层级顺序是否升序，true为后面的头像层级更高    | boolean                                            | false    |
| autoFixFontSize  | 是否自动调整文字大小                 | boolean                                            | true     |
| gap              | 头像之间的间距，负值表示重叠，数值越小重叠越多    | number                                             | -15      |
| extraAvatarStyle | 额外头像的样式（显示 +N 的头像）         | Record<string, any>                                | {}       |

### AvatarGroup Slots

| 插槽名     | 说明    |
|---------|-------|
| default | 头像组内容 | 